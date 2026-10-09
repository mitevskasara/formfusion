import React, { useState, useRef, useMemo } from 'react';
import useFormHelpers from '../hooks/useFormHelpers';

const getSelectedLabels = (selectedOptions, options, multiple, placeholder) => {
  if (multiple) {
    return (
      selectedOptions
        .map(
          (option) =>
            options.find((opt) => opt.value === option)?.label || option
        )
        .join(', ') || placeholder
    );
  } else {
    return (
      options.find((opt) => opt.value === selectedOptions)?.label || placeholder
    );
  }
};

const Select = ({
  options,
  label,
  multiple = false,
  helperText,
  classes,
  className,
  placeholder = multiple ? 'Select options' : 'Select an option',
  validation = { valueMissing: 'Please fill in this field.' },
  ...rest
}) => {
  const { values, errors, onChange, onValidate } = useFormHelpers();

  const validationConfig =
    typeof validation === 'string' ? { valueMissing: validation } : validation;

  const [isOpen, setIsOpen] = useState(false);
  const selectedOptions = values[rest.name] || (multiple ? [] : '');
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const selectRef = useRef(null);
  const hiddenInputRef = useRef(null);

  const fieldId = rest.id || rest.name;
  const labelId = `${fieldId}-label`;
  const listId = `${fieldId}-list`;
  const errorId = `${fieldId}-error`;
  const helperId = `${fieldId}-helperText`;

  const getOptionId = (index) => `${fieldId}-option-${index}`;

  const serializeValue = (value) =>
    Array.isArray(value) ? value.join(',') : (value ?? '');

  const labelClasses = classes?.label
    ? `FormFusion-Select__root__label ${classes.label}`
    : 'FormFusion-Select__root__label';
  const rootClasses = classes?.root
    ? `FormFusion-Select__root ${classes.root}`
    : 'FormFusion-Select__root';
  const selectClasses = `${className ? `FormFusion-Select__root__control ${className}` : 'FormFusion-Select__root__control'} ${errors[rest.name] ? 'FormFusion-Select__root__control--error' : ''}`;
  const menuClasses = classes?.menu
    ? `FormFusion-Select__root__menu ${classes.menu}`
    : 'FormFusion-Select__root__menu';
  const menuListClasses = classes?.menuList
    ? `FormFusion-Select__root__menu__list ${classes.menuList}`
    : 'FormFusion-Select__root__menu__list';
  const optionClasses = classes?.option
    ? `FormFusion-Select__root__menu__option ${classes.option}`
    : 'FormFusion-Select__root__menu__option';
  const errorClasses = classes?.error
    ? `FormFusion-Select__root__error ${classes.error}`
    : 'FormFusion-Select__root__error';
  const helperTextClasses = classes?.helperText
    ? `FormFusion-Select__root__field__helper-text ${classes.helperText}`
    : 'FormFusion-Select__root__field__helper-text';

  const selectedLabels = useMemo(
    () => getSelectedLabels(selectedOptions, options, multiple, placeholder),
    [selectedOptions, options, multiple, placeholder]
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const validateSelection = (updatedValue) => {
    if (!rest.required) return;

    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = serializeValue(updatedValue);
      onValidate(
        { target: hiddenInputRef.current, preventDefault: () => {} },
        validationConfig
      );
    }
  };

  const handleSelect = (option) => {
    let updatedValue;

    if (multiple) {
      updatedValue = Array.isArray(selectedOptions)
        ? selectedOptions.includes(option.value)
          ? selectedOptions.filter((item) => item !== option.value)
          : [...selectedOptions, option.value]
        : [option.value];
    } else {
      updatedValue = option.value;
      setIsOpen(false);
    }

    onChange({
      target: {
        name: rest.name,
        value: updatedValue,
      },
    });

    validateSelection(updatedValue);

    selectRef.current.focus();
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (isOpen) {
          setHighlightedIndex((prevIndex) => (prevIndex + 1) % options.length);
        } else {
          setIsOpen(true);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setHighlightedIndex(
            (prevIndex) => (prevIndex - 1 + options.length) % options.length
          );
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (isOpen) {
          handleSelect(options[highlightedIndex]);
        } else {
          setIsOpen(true);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      case 'Tab':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div className={rootClasses} onKeyDown={handleKeyDown} onBlur={handleBlur}>
      <label id={labelId} htmlFor={fieldId} className={labelClasses}>
        {label}
      </label>
      <div className="FormFusion-Select__root__inner">
        <div
          id={fieldId}
          ref={selectRef}
          className={selectClasses}
          tabIndex="0"
          onClick={handleToggle}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={labelId}
          role="combobox"
          aria-controls={listId}
          aria-activedescendant={
            isOpen ? getOptionId(highlightedIndex) : undefined
          }
          aria-autocomplete="list"
          aria-required={rest.required ? 'true' : 'false'}
          aria-invalid={errors[rest.name] ? 'true' : 'false'}
          aria-errormessage={errors[rest.name] ? errorId : undefined}
          aria-describedby={helperText ? helperId : undefined}
          data-placeholder={selectedLabels === placeholder}
        >
          {selectedLabels}
        </div>
        {isOpen && (
          <div className={menuClasses}>
            <ul
              id={listId}
              className={menuListClasses}
              role="listbox"
              aria-multiselectable={multiple}
              tabIndex="-1"
            >
              {options.map((option, index) => (
                <li
                  key={option.value}
                  id={getOptionId(index)}
                  className={`${optionClasses} ${highlightedIndex === index ? 'FormFusion-Select__root__menu__option--highlighted' : ''}`}
                  role="option"
                  aria-selected={
                    multiple
                      ? selectedOptions.includes(option.value)
                      : selectedOptions === option.value
                  }
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {helperText && (
        <span className={helperTextClasses} id={helperId}>
          {helperText}
        </span>
      )}
      <span className={errorClasses} id={errorId} aria-live="polite">
        {errors[rest.name]}
      </span>
      <input
        type="text"
        name={rest.name}
        ref={hiddenInputRef}
        defaultValue={serializeValue(selectedOptions)}
        required={rest.required}
        tabIndex={-1}
        style={{ position: 'absolute', left: '-9999px' }}
        aria-hidden="true"
        onInvalid={(e) => onValidate(e, validationConfig)}
      />
    </div>
  );
};

export default Select;

import React, { useState, useRef, useEffect, useMemo } from 'react';
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
  validation = 'Please fill in this field.',
  ...rest
}) => {
  const { values, errors, onChange, onValidate } = useFormHelpers();

  const [isOpen, setIsOpen] = useState(false);
  const selectedOptions = values[rest.name] || (multiple ? [] : '');
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const selectRef = useRef(null);
  const listRef = useRef(null);
  const hiddenInputRef = useRef(null);

  let labelClasses = classes?.label
    ? `FormFusion-Select__root__label ${classes.label}`
    : 'FormFusion-Select__root__label';
  let rootClasses = classes?.root
    ? `FormFusion-Select__root ${classes.root}`
    : 'FormFusion-Select__root';
  let selectClasses = `${className ? `FormFusion-Select__root__control ${className}` : 'FormFusion-Select__root__control'} ${errors[rest.name] ? 'FormFusion-Select__root__control--error' : ''}`;
  let menuClasses = classes?.menu
    ? `FormFusion-Select__root__menu ${classes.menu}`
    : 'FormFusion-Select__root__menu';
  let menuListClasses = classes?.menuList
    ? `FormFusion-Select__root__menu__list ${classes.menuList}`
    : 'FormFusion-Select__root__menu__list';
  let optionClasses = classes?.option
    ? `FormFusion-Select__root__menu__option ${classes.option}`
    : 'FormFusion-Select__root__menu__option';
  let errorClasses = classes?.error
    ? `FormFusion-Select__root__error ${classes.error}`
    : 'FormFusion-Select__root__error';
  let helperTextClasses = classes?.helperText
    ? `FormFusion-Select__root__field__helper-text ${classes.helperText}`
    : 'FormFusion-Select__root__field__helper-text';

  const selectedLabels = useMemo(
    () => getSelectedLabels(selectedOptions, options, multiple, placeholder),
    [selectedOptions, options, multiple, placeholder]
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
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

    if (rest.required) {
      onValidate({
        target: {
          name: rest.name,
          value: updatedValue,
          validity: {
            valid: Boolean(updatedValue),
          },
          validationMessage: validation,
        },
        preventDefault: () => {},
      });
    }

    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = updatedValue;
    }

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

  useEffect(() => {
    if (isOpen) {
      listRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className={rootClasses} onKeyDown={handleKeyDown} onBlur={handleBlur}>
      <label htmlFor={rest.id} className={labelClasses}>
        {label}
      </label>
      <div className="FormFusion-Select__root__inner">
        <div
          ref={selectRef}
          className={selectClasses}
          tabIndex="0"
          onClick={handleToggle}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={rest.id}
          role="combobox"
          aria-controls="FormFusion-select-list"
          aria-autocomplete="list"
          aria-required={rest.required ? 'true' : 'false'}
          data-placeholder={selectedLabels === placeholder}
        >
          {selectedLabels}
        </div>
        {isOpen && (
          <div className={menuClasses}>
            <ul
              id="FormFusion-select-list"
              ref={listRef}
              className={menuListClasses}
              role="listbox"
              aria-multiselectable={multiple}
              tabIndex="-1"
            >
              {options.map((option, index) => (
                <li
                  key={option.value}
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
      {helperText && <span className={helperTextClasses}>{helperText}</span>}
      <span className={errorClasses}>{errors[rest.name]}</span>
      <input
        type="text"
        name={rest.name}
        ref={hiddenInputRef}
        defaultValue={selectedOptions}
        required={rest.required}
        style={{ position: 'absolute', left: '-9999px' }}
        aria-hidden="true"
        onInvalid={(e) => onValidate(e, validation)}
      />
    </div>
  );
};

export default Select;

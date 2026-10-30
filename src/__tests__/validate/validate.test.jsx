import validateField from '../../utils/validate';

describe('validateField', () => {
  test('applies the mask even when combined patterns do not match', () => {
    const input = document.createElement('input');
    input.name = 'code';
    input.dataset.pattern = JSON.stringify(['^\\d+$']);
    input.dataset.mask = '##-##';
    input.value = '12ab';
    const dispatch = jest.fn();

    validateField(
      { target: input, preventDefault: () => {} },
      { patternMismatch: 'Digits only' },
      { errors: {}, dispatch }
    );

    expect(input.value).toBe('12-ab');
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_ERRORS',
      payload: { code: 'Digits only' },
    });
  });
});

export const Required = value => (value || typeof value === 'number' ? undefined : 'Field is required');

export const MaxValueValidate = max => {
    return (value) => {
        if (value.length > max) {
            return `Maximum value length must be ${max} characters or less`;
        }
    }
};
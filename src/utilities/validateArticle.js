const validateArticle = (bundle) => {
  const requireFields = [
    'title',
    'body',
    'description'
  ];
  let errors = '';
  for (let i = 0; i < requireFields.length; i += 1) {
    if (bundle[requireFields[i]].trim() === '') {
      errors += `The ${requireFields[i]} is empty. `;
    }
  }
  return errors;
};

export default validateArticle;

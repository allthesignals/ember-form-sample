export const validate = async function (schema, maybeChangeset = {}, prefix = "") {
  const msg = [];
  let data = maybeChangeset;

  if(typeof prefix === 'number'){
    prefix = String(prefix)
  }

  if (data['toJSON']) {
    data = data.toJSON({ includeId: true })
  }

  try {
    await schema.validate(data, { abortEarly: false, });
  } catch (err) {
    err.inner.forEach(m => {
      msg.push({
        key: [prefix, ...m.path.split('.')].filter(e => e).join('.'),
        type: 'error',
        // message: m.message, // add translations then re enable
      })
    });
  }

  return msg
};

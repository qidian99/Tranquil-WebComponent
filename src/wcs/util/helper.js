export const generateHexString = (num = 5) => {
  const letters = "0123456789ABCDEF";
  return Array(num).fill(0).map(() => letters[(Math.floor(Math.random() * letters.length))]).join('');
};


export const generateTagId = (prefix) => {
  return prefix + generateHexString();
}


export const formatDate = (date, options = {
  // year: 'numeric', month: 'short', day: '2-digit',
  hour: 'numeric', minute: 'numeric', weekday: 'long'
}) => {
  const dateTimeFormat = new Intl.DateTimeFormat('en', options)
  return dateTimeFormat.format(date);
}

export const formatShortDateFromUnixTime = (ts) => {
  const date = new Date(ts * 1000)
  const options = {
    year: '2-digit', month: 'numeric', day: 'numeric', timeZone: 'UTC'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

export const formatUnixTime = (
  ts,
  options = {
    year: '2-digit', month: 'numeric', day: 'numeric', timeZone: 'UTC'
  },
  locale = 'en-US',
) => {
  const date = new Date(ts * 1000)
  return new Intl.DateTimeFormat(locale, options).format(date);
}



export const intValidator = (props, propName, componentName) => {
  if (!props[propName]) {
    return;
  }
  if (!/^\d+$/.test(props[propName])) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Should a be a number string'
    );
  }
}



export const jsonArrayValidator = (props, propName, componentName) => {
  if (!props[propName]) {
    return;
  }
  const errStr = 'Invalid prop `' + propName + '` supplied to' +
    ' `' + componentName + '`. Should be a stringfied JSON array.'


  if (typeof props[propName] === 'object') {
    return;
  }

  try {
    if (!Array.isArray(JSON.parse(props[propName]))) {
      return new Error(errStr);
    }
  } catch (e) {
    return new Error(errStr);
  }
}

export const jsonObjectValidator = (props, propName, componentName) => {
  if (!props[propName]) {
    return;
  }
  const errStr = 'Invalid prop `' + propName + '` supplied to' +
    ' `' + componentName + '`. Should be a stringfied JSON array.'

  if (typeof props[propName] === 'object') {
    return;
  }
  try {
    if (typeof JSON.parse(props[propName]) !== 'object') {
      return new Error(errStr);
    }
  } catch (e) {
    return new Error(errStr);
  }
}


export const truncateInput = (input, length = 6, suffix = '...') => {
  if (input.length <= length) return;

  return input.slice(0, length) + suffix;
}



// My viewport script from a previous post
function viewport() {

  let w = window.innerWidth;
  let h = window.innerHeight;

  let orientation = w > h ? 'landscape' : 'portrait';

  let output = {
    w,
    h,
    orientation
  };

  return output;

}

// Converts the viewport units to a pixel-based length
export function viewport2px(size) {

  let int = parseInt(size, 10); // Grabs the size and extracts only the number
  let output;

  size.includes('h') ? output = ((int / 100) * viewport().h) + 'px' : output = ((int / 100) * viewport().w) + 'px';

  return output;
}

export const getJsonProp = (data) => {
  if (!data || typeof data === 'object') {
    return data;
  }

  try {
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
}

export const getBooleanProp = (bool) => (
  bool != false
)

export const getUTCTime = (date) => {
  if (!date) return null;
  return new Date(date.getTime() + date.getTimezoneOffset() * 60000)
}

export const longYearDateOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  timeZone: "UTC",
};

export const shortMonthDateOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
};


export const isAlphanumeric = (val) => {
  const letterNumber = /^[0-9a-zA-Z]+$/;
  if (val.match(letterNumber)) {
    return true;
  }
  return false;
}



export const isNumeric = (val) => {
  const letterNumber = /^[0-9]+$/;
  if (val.match(letterNumber)) {
    return true;
  }
  return false;
}

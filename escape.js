window.clean = function(str) {

  var disinfectedString = '';
  
  str = _.map( str, char => (char === ' ' ) ? '&#32;'  : char ).join('');
  str = _.map( str, char => (char === '!' ) ? '&#33;'  : char ).join('');
  str = _.map( str, char => (char === '\"') ? '&#34;'  : char ).join('');
  str = _.map( str, char => (char === '$' ) ? '&#36;'  : char ).join('');
  str = _.map( str, char => (char === '%' ) ? '&#37;'  : char ).join('');
  str = _.map( str, char => (char === '&' ) ? '&#38;'  : char ).join('');
  str = _.map( str, char => (char === '\'') ? '&#39;'  : char ).join('');
  str = _.map( str, char => (char === '(' ) ? '&#40;'  : char ).join('');
  str = _.map( str, char => (char === ')' ) ? '&#41;'  : char ).join('');
  str = _.map( str, char => (char === '+' ) ? '&#43;'  : char ).join('');
  str = _.map( str, char => (char === '<' ) ? '&#60;'  : char ).join('');
  str = _.map( str, char => (char === '=' ) ? '&#61;'  : char ).join('');
  str = _.map( str, char => (char === '>' ) ? '&#62;'  : char ).join('');
  str = _.map( str, char => (char === '?' ) ? '&#63;'  : char ).join('');
  str = _.map( str, char => (char === '@' ) ? '&#64;'  : char ).join('');
  str = _.map( str, char => (char === '[' ) ? '&#91;'  : char ).join('');
  str = _.map( str, char => (char === ']' ) ? '&#93;'  : char ).join('');
  str = _.map( str, char => (char === '`' ) ? '&#96;'  : char ).join('');
  str = _.map( str, char => (char === '{' ) ? '&#123;' : char ).join('');
  str = _.map( str, char => (char === '}' ) ? '&#125;' : char ).join('');

//  str = _.map( str, char => (char === '#') ? '&#35;' : char ).join('');

//  str = _.map( str, char => (char === ' THE ESCAPE KEY  ') ? '&#;' : char ).join('');

  return disinfectedString;
};

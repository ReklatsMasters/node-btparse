'use strict'

var type = {
  DICT: 1,
  LIST: 2,
  INT: 3,
  STR: 4,
  END: 5,
  UNDEFINED: -1
}

var letter = {
  d: 100,
  l: 108,
  i: 105,
  e: 101
}

var NUM0 = 48

var digit = {
  NUM0: NUM0,
  NUM1: NUM0 + 1,
  NUM2: NUM0 + 2,
  NUM3: NUM0 + 3,
  NUM4: NUM0 + 4,
  NUM5: NUM0 + 5,
  NUM6: NUM0 + 6,
  NUM7: NUM0 + 7,
  NUM8: NUM0 + 8,
  NUM9: NUM0 + 9
}

module.exports = {
  type: type,
  letter: letter,
  digit: digit,
  MINUS: 45
}

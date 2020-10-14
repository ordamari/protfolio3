const BASE_URL = 'task'


export default {
  setNewPos,
  query
};

const gPositionMap = {}

function query() {
  return gPositionMap;
}

function setNewPos(name,pos) {
  gPositionMap[name]=pos;
}


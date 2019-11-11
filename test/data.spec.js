global.window = global;
require('../src/data');
require('./data.spec.js');


describe('validarEmail', () => {
  it('debería ser una función', () => {
    expect(typeof global.validarEmail).toEqual('function');
  });
});


const arr3 = [
  {text: 'blanco'}, 
  {text: 'negro'}, 
  {text: 'rosado'}
];

describe('eliminarObj', () => {
  it('debería ser una funcion', () => {
    expect(typeof global.eliminarObj).toEqual('function');
  });
  it('deberia eliminar el elemento de un array', () => {
    expect(global.eliminarObj(arr3, 2)).toEqual([{text: 'blanco'}, {text: 'negro'}, ]);
  });
});
const ele = {text:'morado'};
const ele2 = [{}, {value: 'morado'}];

describe('savePost', () => {
  it('debería ser una funcion', () => {
    expect(typeof global.savePost).toEqual('function');
  });
  it('debería retornar un array', () => {
    expect(savePost(arr3, ele)).toEqual([{text: 'blanco'}, {text: 'negro'}, {text: 'rosado'}, {text: 'morado'}]);
  });
});

describe('editPost', () => {
  it('debería ser una funcion', () => {
    expect(typeof global.editPost).toEqual('function');
  });
  it('debería modificar un elemento array', () => {
    expect(editPost(arr3, 1, ele2)).toEqual([{text: 'blanco'}, {text: 'morado'}, {text: 'rosado'}]);
  });
});

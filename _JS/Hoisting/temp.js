// compiler
// сначала разбивает на лексемы/лексический разбор
// разбор массива лексем в дерево вложенных елементв. AST абстрактное синтаксическое дерево
// генерирование кода - AST переобразуется в исполняемый машинный код

function test() {
  var t = 'h'
  {
    // t = 's'
    let t = 'z'
    console.log(t)
  }
}
test()

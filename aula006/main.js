const nome = String(window.prompt('Qual é o seu nome?'));
const idade = Number.parseInt(window.prompt('Digite sua idade (Apenas números!)'));
const estado = String(window.prompt('De qual estado você se encontra?'));
const conta1 = Number(window.prompt('Me diga um valor e terá seus números somados.'));
const conta2 = Number(window.prompt('Me diga outro valores e terá seus números somados.'));
//parseInt é equivalente há transformação da sting em number, em números inteiros.
//parseFloat é equivalente há transformação da sting em number, em números decimais.

let ResultadoConta = conta1 + conta2;
window.alert(`O aluno ${nome.toLocaleUpperCase()} que possui ${idade} anos, teve como resultado ${ResultadoConta} da sua soma final.`);
//window.alert('Você tem ' + idade + ' anos!');
//window.alert('E seu Estado é, ' + estado + '!');


let nomeCliente = "Eliel";
let agencia = "Bradesco";
let saldoConta = 1500.00

const extrato = () =>{
    return `Nome: ${nomeCliente} \nAgencia: ${agencia} \nSaldo: ${saldoConta.toFixed(2)}`;
}

console.log(extrato())

const saque = (saqueCliente) =>{
    saldoConta = saldoConta - saqueCliente;
    console.log(extrato())
}

const deposito = (depositoCliente) =>{
    saldoConta = saldoConta + depositoCliente;
    console.log(`Você depositou ${depositoCliente.toFixed(2)}`)
    console.log(extrato());
}

saque(1400.00);
deposito(2000.00);
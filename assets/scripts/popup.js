document.getElementById('generate')
    .addEventListener("click", generateFiscalCode);

function validateFiscalCode() {

    let fiscalCode = document.getElementById("fiscalCode").value.trim();
    console.log('fc=', fiscalCode)

    let s = 0;
    for (let i = 0; i < 10; i = i + 2) {
        s += parseInt(fiscalCode[i]);
    }


    for (let i = 1; i <= 10; i = i + 2) {
        let num = parseInt(fiscalCode[i]) * 2;
        if (num > 9)
            s += (num - 9);
        else
            s += num;
    }

    let r = s % 10;
    let c = parseInt(fiscalCode[10]);

    let result = 'inválido';
    if (r == 0 && c == 0)
        result = 'valido'
    else if (10 - r == c)
        result = 'valido'

    document.getElementById('isValid').textContent = result;
}

function generateFiscalCode() {

    let initial = '';
    for (let i = 0; i < 10; i++) {
        initial += Math.floor(Math.random() * 10);
    }
    initial = initial.trim();

    let s = 0;
    for (let i = 0; i < 10; i = i + 2) {
        s += parseInt(initial[i]);
    }

    for (let i = 1; i <= 10; i = i + 2) {
        let num = parseInt(initial[i]) * 2;
        if (num > 9)
            s += (num - 9);
        else
            s += num;
    }

    let r = s % 10;
    let c = 0;

    c = r == 0 ? 0 : 10 - r;

    let generateFiscalCode = initial + c;

    document.getElementById('fiscalCode').value = generateFiscalCode;
}
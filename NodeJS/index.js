const questions = [
    "O que aprendi hoje?",
    "o que me deixou aborrecido? e o que posso fazer pra melhorar?",
    "O que me deixou Feliz hoje?",
    "quantas pessoas eu ajudei?",
]

    const ask = (index = 0) => {
        process.stdout.write('\n\n' + questions[index] + " > ")
    }
    ask()
    
   const answers = []
        process.stdin.on('data', data => {
        answers.push(data.toString().trim())
        if (answers.length < questions.length) {
        ask(answers.length)
        } else {
        console.log(answers)
        process.exit()
            }
        })

        process.on ('exit', () => {
            console.log( `
                Isso ai Henrique!!!!!
                
                O que Você aprendeu Hoje foi:
                ${answers[0]}
                
                o que te deixou aborrecido e você poderia melhorar é:
                ${answers[1]}
                
                O que te deixou Feliz hoje foi:
                ${answers[2]}
                
                você ajudou ${answers[3]} pessoa(s) Hoje.
                
                Volte amanhã pra novas reflexões!!!!!
            `)
        })
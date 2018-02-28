$.getJSON("./tasks.json", (json) => {
    json.forEach((spec, index) => {
        $('#tasks').append(`
        <div class="task" id=task-${index}>
            <h1>${spec.name}</h1>
            <h2>${spec.description}</h2>
            <ol>
                ${spec.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
            <button onclick=finishTask(${index}) id=btn-${index} class="btn btn-success btn-sm btn-block"><i class="fas fa-check"></i></button>
        </div>
        `)
    })
})

function finishTask(id) {
    $(`#task-${id}`).addClass('complete');
    $(`#btn-${id}`).addClass('disabled')
    $(`#btn-${id}`).removeClass('btn-success')
    $(`#btn-${id}`).addClass('btn-secondary')
}


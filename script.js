function showTasks(json) {
    json.forEach((spec, index) => {
        spec.steps = spec.steps || [];
        $('#tasks').append(`
        <div class="task inactive" id=task-${index}>
            <h1>${index + 1}. ${spec.name}</h1>
            <h2>${spec.description}</h2>
            <ol>
                ${spec.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
            <button onclick=finishTask(${index}) id=btn-${index} hidden class="btn btn-secondary btn-sm btn-block disabled"><i class="fas fa-check"></i></button>
        </div>
        `)
    })

    activate(0);
}

$('#xd').hide()

document.getElementById('xd').onload =  e => {
    $('#xd').fadeIn();
    $('#loading').remove()
};

function finishTask(id) {
    deactivate(id)
    activate(id + 1);
}

function deactivate(id) {
    $(`#task-${id}`).addClass('inactive');
    $(`#btn-${id}`).removeClass('btn-success');
    $(`#btn-${id}`).addClass('btn-secondary');
    $(`#btn-${id}`).prop('hidden', true)
}

function activate(id) {
    $(`#task-${id}`).removeClass('inactive');
    $(`#btn-${id}`).addClass('btn-success');
    $(`#btn-${id}`).removeClass('btn-secondary');
    $(`#btn-${id}`).prop('hidden', false)
}


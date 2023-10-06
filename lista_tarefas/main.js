$('form').on('submit', function(e) {
    e.preventDefault()
    const campoTarefa = $('#campo-tarefa').val()
    $(`<li>${campoTarefa}</li>`)
    .appendTo('#lista-tarefa')
    .on('click', function() {
        $(this).css('text-decoration', 'line-through')
    })

    $('#campo-tarefa').val('')
})
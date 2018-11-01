navigator.mediaDevices.getUserMedia({ audio: true, video: { facingMode: { exact: "environment" } } })
    .then(stream => {
        alert('Yep')
    })
    .catch(err => alert(err))
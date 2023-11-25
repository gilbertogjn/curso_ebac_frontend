document.addEventListener('DOMContentLoaded', function() {
    const profileAvatar = document.querySelector('#profile-avatar')
    const profileName = document.querySelector('#profile-name')
    const profileUsername = document.querySelector('#profile-username')
    const repositorios = document.querySelector('#repositorios')
    const seguidores = document.querySelector('#seguidores')
    const seguindo = document.querySelector('#seguindo')
    const profileLink = document.querySelector('#profile-link')

    fetch('https:/api.github.com/users/gilbertogjn')
        .then(function(res) {
            return res.json()
        })
        .then(function(json) {
            profileAvatar.src = json.avatar_url
            profileName.innerHTML = json.name
            profileUsername.innerHTML = json.login
            repositorios.innerHTML = json.public_repos
            seguidores.innerHTML = json.followers
            seguindo.innerHTML = json.following
            profileLink.href = json.html_url
        })
})
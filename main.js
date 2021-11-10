function getGitHubProfileInfos() {
  const url = 'https://api.github.com/users/herculesoliverr'

  fetch(url)
    .then(response => response.json())
    .then(data => {
      bioPerfil.textContent = data.bio
      userName.textContent = data.name
    })
}

getGitHubProfileInfos()

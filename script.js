/*Função para alterar o modo da página*/
function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light_mode');
    updateProfileAppearance();
}

/*Função para setar a foto de perfil de acordo com o modo da página*/
function updateProfileAppearance() {
    const html = document.documentElement;
    const profile = document.querySelector('.profile');

    /*Verifica o modo atual e ajusta a imagem de fundo e a borda*/ 
    if (html.classList.contains('light_mode')) {
        profile.style.backgroundImage = "url('assets/joaofac_profile-removebg-preview-removebg-preview.png')";
        profile.style.border = "2.5px solid #4B0082";
    } else {
        profile.style.backgroundImage = "url('assets/joaofac_profile-removebg-preview.jpg')";
        profile.style.border = "2.5px solid white";
    }
}

/*Define o estado inicial quando a página é carregada*/ 
function setInitialProfileState() {
    updateProfileAppearance();
}

/*Chama a função ao carregar a página*/ 
document.addEventListener('DOMContentLoaded', setInitialProfileState);

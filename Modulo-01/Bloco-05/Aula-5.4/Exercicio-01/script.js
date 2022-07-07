//Por definição cookie é deletado quando navegador é fechado

// document.cookie = 'email=exemplo@email.com' //coockie recebe string

document.cookie = 'email=exemplo@email.com; expires=Tue, 09 Feb 2023 12:00:00 UTC'; // Data de expiração do cookie, para não ser deletado quando navegador é fechado

// document.cookie = 'email=exemplo@email.com; expires=Tue, 09 Feb 2023 12:00:00 UTC; path/'; // path que dirá ao navegador qual caminho o cookie que você criou pertence. Por padrão, o cookie pertence à página atual.

const myCookie = document.cookie;

console.log(myCookie);
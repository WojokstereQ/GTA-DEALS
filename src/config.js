module.exports = {
    applicationConfig: { //Konfiguracja aplikacji
        botToken: "", //Token bota, znajdziesz go na stronie https://discord.com/developers/applications w zakładce BOT.
    },

    verifyConfig: { //konfiguracja weryfikacji
        roleId: "", //rola nadawana po zweryfikowaniu się

        embed: { //embed po wysłaniu komendą /panel
            title: "",
            description: "",
            color: 0xFF0000,
            image: "",
            thumbnail: "",
            footer: "",
        },
    },

    ticketConfig: { //konfiguracja weryfikacji
        roleId: "", //rola która ma dostęp do ticketa
        categoryId: "", //kategoria w której ticket się tworzy

        embed: { //embed po wysłaniu komendą /panel
            title: "",
            description: "",
            color: 0xFF0000,
            image: "",
            thumbnail: "",
            footer: "",
        },

        embed2: { //embed po utworzeniu ticketa. Jeżeli chcesz ping osoby która utworzyła w tickecie to dodaj do description {USER}
            title: "",
            description: "",
            color: 0xFF0000,
            image: "",
            thumbnail: "",
            footer: "",
        },
    },
};
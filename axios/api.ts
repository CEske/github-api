import axios from 'axios';

export const discordWebhook = axios.create({
    baseURL: 'https://discord.com/api/webhooks',
    headers: {
        'Content-Type': 'application/json'
    }
})
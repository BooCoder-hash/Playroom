module.exorts = (client) => {
    const channelId = '797683010115600395' // welcome channel
    const targetChannelId = '812818387276791888' // rules and info

    client.on('guildMemberAdd', member => {
        console.log(member)

        const message = `Welcome <@${memberid
            }> to the server Dont forget to check out ${member.guild.channels.cache
                .get(targetChannelId)
                .toString()}`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}

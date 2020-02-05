let messages = [],
    id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body

        let newMessage = {
            text: text,
            time: time,
            id: id
        }

        messages.push(newMessage)
        id++

        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        let { id } = req.params
        const { text } = req.body
        const index = messages.findIndex(message => message.id === +id)

        messages[index] = {
            id: messages[index].id,
            text: text || messages[index].text,
            time: messages[index].time
        }
        
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        let { id } = req.params
        const index = messages.findIndex(message => message.id === +id)

        messages.splice(index, 1)

        res.status(200).send(messages)
    }
}
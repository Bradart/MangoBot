const hello = async () => {
        message.reply(`Hey.`);
        console.log("got it");
}
module.exports = {
    name: 'hello',
	description: 'Says hello',
    execute(message, args) {
         hello(message, args);
	}
}

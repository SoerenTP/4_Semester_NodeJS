<script>
    const messages = $state([]);

    let messageInput = $state("");

    function addMessage(){
        messages.push(messageInput);
        messageInput = "";
    }
</script>

<h1>Messages</h1>

<p>{messages}</p>

<input bind:value={messageInput} placeholder="Type you message...">

<button onclick={addMessage}>Add Message</button>
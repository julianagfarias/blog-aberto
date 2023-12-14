document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('publicar').addEventListener('click', addPost);

	function addPost() {
		const titulo = document.getElementById('post-titulo').value;
		const conteudo = document.getElementById('post-conteudo').value;

		const postElement = document.createElement('article');

		postElement.innerHTML = `
			<h3>${titulo}</h3>
			<p>Data da publicação: <time>${new Date().toLocaleDateString()}</time></p>
			<p>${conteudo}</p>
		`

		const postsSection = document.getElementById('post');
		const primeiroPost = postsSection.firstChild;
		postsSection.insertBefore(postElement, primeiroPost);

		document.getElementById('post-form').reset();
	}


} )
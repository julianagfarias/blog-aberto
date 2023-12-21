document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('publicar').addEventListener('click', addPost);

	function addPost() {
		const titulo = document.getElementById('post-titulo').value;
		const conteudo = document.getElementById('post-conteudo').value;

		const postElemento = document.createElement('article');

		postElemento.innerHTML = `
			<h3>${titulo}</h3>
			<p>Data da publicação: <time>${new Date().toLocaleDateString()}</time></p>
			<p>${conteudo}</p>
			<button class="excluir-post" onclick="excluirPost(this)"> <i class="fa-solid fa-trash-can"></i> </button>
			<div class="form-comentario">
				<label for="comentario"> Comentário: </label>
				<textarea id="comentario" class="comentario-input" placeholder="Digite seu comentário..."></textarea>
				<button class="adicionar-comentario" onclick="adicionarComentario(this)"> Comentar <i class="fa-solid fa-comment-dots"></i> </button>
			</div>
			<div class="comentarios"></div>
		`

		const postsSection = document.getElementById('post');
		const primeiroPost = postsSection.firstChild;
		postsSection.insertBefore(postElemento, primeiroPost);

		document.getElementById('post-form').reset();
	}

	window.adicionarComentario = function (button) {
		const postElemento = button.closest('article');
		const comentariosDiv = postElemento.querySelector('.comentarios');
		const comentarioInput = postElemento.querySelector('.comentario-input');

		const comentario = comentarioInput.value.trim();

		if (comentario !== '') {
			const comentarioElemento = document.createElement('p');

			comentarioElemento.textContent = comentario;
			comentariosDiv.appendChild(comentarioElemento);
			comentarioInput.value = '';
		}

	}

	window.excluirPost = function (button) {
		const postElemento = button.closest('article');

		postElemento.remove();
	}

	document.getElementById('barra-nav').addEventListener('click', function(){
		const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);

		this.style.backgroundColor = corAleatoria;
	})


} )
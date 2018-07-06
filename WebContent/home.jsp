<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="br.com.model.*"%>
<%@ page import="java.util.List"%>
<!doctype html>
<html lang="pt-br">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CURRENSEEKER</title>

<!-- Uso de fonte externa. -->
<link rel=stylesheet type=text/css href=css.css>
<script src=jquery.min.js></script>
<script src=javascript.js></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
</head>

<body style="background-color: #000000; font-size: 1.4vw;">
	<nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
		<a class="navbar-brand col-sm-3 col-md-2 mr-0" href="home">Home</a>
		<ul class="navbar-nav px-3">
			<li class="nav-item text-nowrap"><a class="nav-link"
				href="logOut">Sair</a></li>
		</ul>
	</nav>
	<br>
	<pre style="color: #00FFFF" align=center>
.________ ___   ___ ________ ________ _________ ___    __ <b
			style="color: #00FF00">_\\_\\__</b> _______ _________ ___   __ ________ ________..
/\   ____\\  \ /\  \\   ____\\   ____\\   ___  \\  \::|  \<b
			style="color: #00FF00">\   __ _\</b>\   ___ \\   ___ \\  \:|  |\   ___ \\   ____\:
\ \  \___/ \  \\ \  \\  \___/ \  \___/ \  \__\  \\  \:|   \<b
			style="color: #00FF00">\  \_\\__</b>\  \__\ \\  \__\ \\  \|  |_\  \__\ \\  \___/:
:\ \  \::.\ \  \\ \  \\  \::.\ \  \::.\ \   _____\\  \| |  \<b
			style="color: #00FF00">\__ __  \</b>\   ____\\   ____\\   __  \\   ____\\  \::::
:.\ \  \___\_\  \\_\  \\  \::.\ \  \::.\ \  \_____.\    |\  \:<b
			style="color: #00FF00">_\\_\  \</b>\  \____.\  \____.\  \ \  \\  \____.\  \:::
::.\ \_______\\________\\__\::.\ \__\::.\ \________\\___| \__\<b
			style="color: #00FF00">\__ __ _\</b>\_______\\_______\\__\ \__\\_______\\__\::
:::.\/_______//________//__/.::.\/__/.::.\/________//__/:\/__/<b
			style="color: #00FF00">/_/\\/\\/</b>/_______//_______//__/\/__//_______//__/.:
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::<b
			style="color: #00FF00">\//\//</b>:::::::::::::::::::::::::::::::::::::::::::
										          <b>--o-conversor-de-moedas</b>
		</pre>
	<form class="form-signin" method="post">
		<div class="row">
			<div class="col-2"></div>
			<div class="col-2">
				<input type="text" name="simbolo" class="form-control"
					placeholder="Símbolo" required autofocus>
			</div>
			<div class="col-2">
				<input type="text" name="nome" class="form-control"
					placeholder="Nome da moeda" required>
			</div>
			<div class="col-2">
				<input type="text" name="pais" class="form-control"
					placeholder="País de circulação" required>
			</div>
			<div class="col-2">
				<input type="number" name="valor" class="form-control"
					placeholder="Valor" step="0.01" min="0.01" required>
			</div>
			<div class="col-2"></div>
		</div>
		<br>
		<div class="row">
			<div class="col-4"></div>
			<div class="col-4">
				<button formaction="cadastrarMoeda"
					class="btn btn-light form-control" type="submit">Cadastrar</button>
			</div>
			<div class="col-4"></div>
		</div>
		<br>
		<!-- 
		<div class=painel align=left style=padding:"10px 10px 10px 10px">
			<x align=center style=float:left> <span
					style="color: #FF0000; font-size: 14px; font-family: courier"><b>VALOR
						DE CONVERSÃƒO:</b></span> <span> <input id=valor class=painel
					type="text" name="Valor da conversção" value="1.0000"
					style="background-color: #252525; width: 85px; padding-top: 5px">
				</span> <span>
					<button class=botao
						onclick="converter(document.getElementById('valor').value)">
						<b>Converter</b>
					</button>
				</span> </x>
				<x align=center style=float:right> <span
					style="color: #FF0000; font-size: 14px; font-family: courier; padding-right: 70px"><b>SIMBOLO
						DA MOEDA:</b></span> <span> <input id=simbolo class=painel type="text"
					name="Símbolo da moeda" value="BRL"
					style="background-color: #252525; width: 30px; padding-top: 5px">
				</span> <span>
					<button class=botao
						onclick="evidenciar(document.getElementById('simbolo').value)">
						<b>Consultar</b>
					</button>
				</span> </x>
			</div>
		 -->
		<%
			HttpSession sessao = request.getSession();
			Usuario user = (Usuario) sessao.getAttribute("usuario");
			List<Moeda> all = (List<Moeda>) sessao.getAttribute("all");
			if (all != null) {
		%>
		<div align=center style="background-color: #000000; color: #00FF00;">
			<table class="tabela table-striped">
				<thead>
				<col width="200">
				<col width="200">
				<col width="200">
				<col width="200">
				<col width="200">
				<tr style="color: #FFFF00">
					<th>SÍMBOLO</th>
					<th>NOME DA MOEDA</th>
					<th>PAÍS DE CIRCULAÇÃO</th>
					<th>VALOR</th>
					<th>OPÇÕES</th>
				</tr>
				</thead>





				<%
					int cont = 0;
						for (Moeda moeda : all) {
				%>
				<tbody>
					<%
						if (cont % 2 == 0) {
					%>
					<tr class="par">
						<%
							} else {
						%>
					
					<tr class="impar">
						<%
							}
						%>
					
					<tr>
						<td><%=moeda.getSimbolo()%></td>
						<td><%=moeda.getNome()%></td>
						<td><%=moeda.getPais()%></td>
						<td><%=moeda.getValor()%></td>
						<td>
							<button formaction="alterar" class="btn btn-outline-warning"
								name="idMoeda" type="submit" value="<%=moeda.getId()%>">ALTERAR</button>
						</td>
						</form>
						<td>
							<form class="form-signin" action="deletar" method="post">
								<button class="btn btn-outline-danger" name="idMoeda"
									type="submit" value="<%=moeda.getId()%>">EXCLUIR</button>
							</form>
						</td>
					</tr>
					<%
						}
					%>
				</tbody>
			</table>
		</div>
		<%
			} else {
		%>
		<h1>Não existem moedas cadastradas.</h1>
		<%
			}
		%>

		<div align=center
			style="background-color: #000000; color: #00FF00; font-family: 'Open Sans'; src: url('OpenSans-Regular.woff')">
			<div id="tabela"></div>
		</div>

		<div onclick=easterEgg()>
			<pre id="SUKA BLYAT" align=center
				style="color: #FF0000; font-size: 0.5vw;">
.___________ ___    ___ ___   ___ _________     _________    __________ ___   ____ ___________ ____............
/\   _______\\  \::/\  \\  \::|  |\   ___  \:::/\   _____\::/\   ____  \\  \::|   \\____   ___\\   \:::::::::::
\ \  \______/ \  \_\_\  \\  \_|  |_\  \__\  \:.\ \  \____/::\ \  \__/\  \\  \:|    \___/\  \__/ \   \_______:::
:\ \  \:::::.\ \_______  \\   ___  \\   ___  \:.\ \  \______.\ \  \.\ \  \\  \| |\  \:.\ \  \:.\ \    ____  \::
:.\ \  \______\/_______\  \\  \_/\  \\  \ /\  \:.\ \   ___  \._|  |:.\ \  \\    | \  \:.\ \  \:.\ \   \___\  \:
::.\ \__________\::/\______\\__\\ \__\\  \\ \__\:.\ \________\\___|::.\ \__\\___|\ \__\:.\ \__\:.\ \__________\
:::.\/__________/:.\/______//__/.\/__//__/.\/__/::.\/________//__/::::.\/__//__/:.\/__/::.\/__/::.\/__________/
			</pre>
		</div>
</body>
</html>
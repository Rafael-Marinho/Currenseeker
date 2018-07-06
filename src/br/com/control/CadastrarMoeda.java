package br.com.control;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import br.com.model.Moeda;
import br.com.model.Usuario;

/**
 * Servlet implementation class CadastrarMoeda
 */
@WebServlet("/cadastrarMoeda")
public class CadastrarMoeda extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public CadastrarMoeda() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		HttpSession sessao = request.getSession();
		Usuario user = (Usuario) sessao.getAttribute("usuario");

		String simbolo = (String) request.getParameter("simbolo");
		String nome = (String) request.getParameter("nome");
		String pais = (String) request.getParameter("pais");
		String valor = (String) request.getParameter("valor");

		Moeda moeda = new Moeda();
		moeda.setSimbolo(simbolo);
		moeda.setNome(nome);
		moeda.setPais(pais);
		moeda.setValor(Double.parseDouble(valor));
		moeda.setUsuario(user);

		Dao d = new Dao();
		d.insert(moeda);

		response.sendRedirect("home");

		//doGet(request, response);
	}

}

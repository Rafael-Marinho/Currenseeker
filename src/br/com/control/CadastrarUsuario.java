package br.com.control;

import java.io.IOException;
import java.util.Date;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import br.com.model.Usuario;

/**
 * Servlet implementation class CadastrarUsuario
 */
@WebServlet("/cadastro")
public class CadastrarUsuario extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public CadastrarUsuario() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		//response.sendRedirect("cadastrarUsuario.html");

		HttpSession sessao = request.getSession();
		Usuario user = (Usuario) sessao.getAttribute("usuario");
		if(user==null){
			RequestDispatcher dis = request.getRequestDispatcher("cadastrarUsuario.html");
			dis.forward(request, response);
		}
		else{
			response.sendRedirect("home");
		}

		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		String nome = (String) request.getParameter("nome");
		String email = (String) request.getParameter("email");
		String senha = (String) request.getParameter("senha");

		Usuario user = new Usuario();
		user.setNome(nome);
		user.setEmail(email);
		user.setSenha(senha);
		user.setDataRegistro(new Date());

		Dao d = new Dao();
		d.insert(user);

		response.sendRedirect("login");

		//doGet(request, response);
	}
}
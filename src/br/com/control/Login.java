package br.com.control;

import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import br.com.model.Usuario;

/**
 * Servlet implementation class Login
 */
@WebServlet("/login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		//response.sendRedirect("login.html");
		
		HttpSession sessao = request.getSession();
		Usuario user = (Usuario) sessao.getAttribute("usuario");
		if(user==null){
			RequestDispatcher dis = request.getRequestDispatcher("login.html");
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

		String email = (String) request.getParameter("email");
		String senha = (String) request.getParameter("senha");
		Dao d = new Dao();
		Usuario user = d.findUser(email, senha);
		if(user==null) response.sendRedirect("login");
		else{
			HttpSession sessao = request.getSession();
			sessao.setAttribute("usuario", user);
			response.sendRedirect("home");
		}

		//doGet(request, response);
	}
}
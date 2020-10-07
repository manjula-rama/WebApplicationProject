package com.emplys;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CurrencyServlet
 */
@WebServlet(name="CurrencyServlet", urlPatterns= {"/Currency"})
public class CurrencyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       public static double RATE=79;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CurrencyServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");;
		PrintWriter pw=response.getWriter();
		double amount=Double.parseDouble(request.getParameter("amount"));
		if(amount!=0) {
			double usd=amount/RATE;
			pw.println("<h2 style=color:green>USD="+usd+"</h2>");
		}
		else {
			pw.println("<h2 style=color:red>aoumt is required</h2>");
		}
	}

}

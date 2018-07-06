package br.com.control;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.exception.ConstraintViolationException;

import br.com.model.Moeda;
import br.com.model.Usuario;

public class Dao {

	protected Session session;

	public void insert(Object object) throws ConstraintViolationException {

		session = HibernateControl.getSession();

		session.beginTransaction();

		session.save(object);

		session.getTransaction().commit();

		session.flush();

		session.close();

	}

	public void update(Object object) {

		session = HibernateControl.getSession();

		session.beginTransaction();

		session.update(object);

		session.getTransaction().commit();

		session.flush();

		session.close();

	}

	public void delete(Object object) {

		session = HibernateControl.getSession();

		session.beginTransaction();

		session.delete(object);

		session.getTransaction().commit();

		session.flush();

		session.close();

	}

	public Usuario findUser(String email, String encryptedPassword) {

		Usuario user = null;

		session = HibernateControl.getSession();

		session.beginTransaction();

		Object object = session
				.createQuery("from Usuario where email = '" + email + "' and senha = '" + encryptedPassword + "'")
				.uniqueResult();

		session.getTransaction().commit();

		session.flush();

		session.close();

		if (object != null) {
			user = (Usuario) object;
		}

		return user;
	}

	public Usuario findUserById(String id) {

		Usuario user = null;

		session = HibernateControl.getSession();

		session.beginTransaction();

		Object object = session
				.createQuery("from User where id = '" + id + "'")
				.uniqueResult();

		session.getTransaction().commit();

		session.flush();

		session.close();

		if (object != null) {
			user = (Usuario) object;
		}

		return user;
	}
	
	public Moeda findMoedaById(String id) {

		Moeda moeda = null;

		session = HibernateControl.getSession();

		session.beginTransaction();

		Object object = session
				.createQuery("from Moeda where id = '" + id + "'")
				.uniqueResult();

		session.getTransaction().commit();

		session.flush();

		session.close();

		if (object != null) {
			moeda = (Moeda) object;
		}

		return moeda;
	}

	@SuppressWarnings("unchecked")
	public List<Usuario> findAll() {

		List<Usuario> all = null;

		session = HibernateControl.getSession();

		session.beginTransaction();

		all = session.createQuery("from User").list();

		session.getTransaction().commit();

		session.flush();

		session.close();

		return all;
	}
	
	@SuppressWarnings("unchecked")
	public List<Moeda> findAllMoedaByUser(String id) {

		List<Moeda> all = null;

		session = HibernateControl.getSession();

		session.beginTransaction();
		
		all = session.createQuery("from Moeda where idUsuario = '" + id + "' ORDER BY id DESC").list();

		session.getTransaction().commit();

		session.flush();

		session.close();

		return all;
	}

	public Session getSession() {
		return session;
	}
}
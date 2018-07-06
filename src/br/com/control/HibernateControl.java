package br.com.control;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

@SuppressWarnings("deprecation")
abstract class HibernateControl {
	private static SessionFactory factory;

	static {
		try {
			factory = new Configuration().configure().buildSessionFactory();
		} catch (Throwable ex) {
			throw new ExceptionInInitializerError(ex);
		}
	}

	public synchronized static SessionFactory getFactory() {
		return factory;
	}

	public static void shutdown() {
		getFactory().close();
	}

	public synchronized static Session getSession() {
		return factory.openSession();
	}

}
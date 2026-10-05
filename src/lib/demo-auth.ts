"use client";

import { compareSync, hashSync } from "bcryptjs";

const USERS_KEY = "mangoo_demo_users";
const SESSION_KEY = "mangoo_demo_session";

export type DemoSession = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type StoredUser = DemoSession & {
  passwordHash: string;
  createdAt: string;
};

function getUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function registerDemoUser(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}) {
  const users = getUsers();

  const email = data.email.trim().toLowerCase();

  if (users.some((user) => user.email === email)) {
    throw new Error("An account already exists with this email.");
  }

  const user: StoredUser = {
    id: crypto.randomUUID(),
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    email,
    phone: data.phone.trim(),
    passwordHash: hashSync(data.password, 10),
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify([...users, user]),
  );

  const session: DemoSession = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));

  return session;
}

export function loginDemoUser(email: string, password: string) {
  const users = getUsers();

  const user = users.find(
    (item) => item.email === email.trim().toLowerCase(),
  );

  if (!user || !compareSync(password, user.passwordHash)) {
    throw new Error("Incorrect email or password.");
  }

  const session: DemoSession = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));

  return session;
}

export function getDemoSession(): DemoSession | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function logoutDemoUser() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
}
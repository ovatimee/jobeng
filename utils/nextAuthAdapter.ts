import type { Adapter } from "next-auth/adapters";
import { PoolClient } from "pg";

export interface Session {
    user: WithAdditionalParams<User>;
    accessToken?: string;
    expires: string;
}

export type WithAdditionalParams<T extends Record<string, any>> = T & Record<string, unknown>;

export interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

interface RETURNING {
  sessionToken: string;
  session: any;
  user: any;
}

function PostgresAdapter(client: PoolClient, options = {}): Adapter {
  //ts-ignore
  return {
    async createUser(user) {
      // console.log(user)
      try {
        const sql = `
        INSERT INTO users (name, email, email_verified, image) 
        VALUES ($1, $2, $3, $4) 
        RETURNING id, name, email, email_verified, image`;
        let result = await client.query(sql, [
          user.name,
          user.email,
          user.emailVerified,
          user.image,
        ]);
        return result.rows[0];
      } catch (err) {
        console.log("create user", err);
        return;
      }
    },
    async getUser(id) {
      console.log(id);
      try {
        const sql = `select * from users where id = $1`;
        let result = await client.query(sql, [id]);
        return result.rows[0];
      } catch (err) {
        console.log("get user", err);
        return;
      }
    },
    async getUserByEmail(email) {
      try {
        const sql = `select * from users where email = $1`;
        let result = await client.query(sql, [email]);
        return result.rows[0];
      } catch (err) {
        console.log("get user by email", err);
        return;
      }
    },
    async getUserByAccount({ providerAccountId, provider }) {
      try {
        const sql = `
          select u.* from users u join accounts a on u.id = a.user_id 
          where 
          a.provider_id = $1 
          and 
          a.provider_account_id = $2`;

        const result = await client.query(sql, [provider, providerAccountId]);
        return result.rows[0];
      } catch (err) {
        console.log("get user by account", err);
      }
    },
    async updateUser(user) {
      try {
        return user as any;
      } catch (err) {
        console.log(err);
        return;
      }
    },
    async linkAccount(account) {
      // console.log(account)
      try {
        const sql = `
        insert into accounts 
        (
          user_id, 
          provider_id, 
          provider_type, 
          provider_account_id, 
          access_token,
          access_token_expires
        )
        values ($1, $2, $3, $4, $5, to_timestamp($6))`;

        const params = [
          account.userId,
          account.provider,
          account.type,
          account.providerAccountId,
          account.access_token,
          account.expires_at,
        ];

        await client.query(sql, params);
        return account;
      } catch (err) {
        console.log("link acount", err);
        return;
      }
    },
    // @ts-ignore
    async createSession({ sessionToken, userId, expires }) {
      try {
        const sql = `insert into sessions (user_id, expires, session_token) values ($1, $2, $3)`;
        await client.query(sql, [userId, expires, sessionToken]);
        return { sessionToken, userId, expires };
      } catch (err) {
        console.log("create session", err);
        return;
      }
    },

    // @ts-ignore
    async getSessionAndUser(sessionToken) {
      try {
        let result;
        result = await client.query("select * from sessions where session_token = $1", [
          sessionToken,
        ]);

        let session = result.rows[0];

        result = await client.query("select * from users where id = $1", [session.user_id]);
        let user = result.rows[0];

        return {
          sessionToken,
          session,
          user,
        } as RETURNING;
      } catch (err) {
        console.log("get seesion under user", err);
        return;
      }
    },
    async updateSession({ sessionToken }) {
      console.log("updateSession", sessionToken);
      return sessionToken as any;
    },
    async deleteSession(sessionToken) {
      try {
        const sql = `delete from sessions where session_token = $1`;
        await client.query(sql, [sessionToken]);
      } catch (err) {
        console.log("delete session", err);
        return;
      }
    },
    async createVerificationToken({ identifier, expires, token }) {
      try {
        const token = "Token";
        return token as any;
      } catch (error) {
        console.log("createVerification session", error);
        return;
      }
    },
    async useVerificationToken({ identifier, token }) {
      try {
        const token = "Token";
        return token as any;
      } catch (error) {
        console.log("userverification session", error);
        return error;
      }
    },
  };
}

export default PostgresAdapter;

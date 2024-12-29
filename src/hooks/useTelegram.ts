// types.ts
interface TelegramUser {
	id: number;
	first_name: string;
	last_name?: string;
	username?: string;
	language_code?: string;
	is_premium?: boolean;
}

declare global {
	interface Window {
		Telegram: {
			WebApp: {
				initData: string;
				initDataUnsafe: {
					user?: TelegramUser;
					start_param?: string;
				};
			};
		};
	}
}

// hooks/useTelegramUser.ts
import { useState, useEffect } from "react";

export const useTelegram = () => {
	const [user, setUser] = useState<TelegramUser | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		try {
			// Check if Telegram WebApp is available
			if (!window.Telegram?.WebApp) {
				throw new Error("Telegram WebApp is not available");
			}

			// Get user data from Telegram WebApp
			const userData = window.Telegram.WebApp.initDataUnsafe.user;

			if (!userData) {
				throw new Error("User data not available");
			}

			setUser(userData);
			setLoading(false);
		} catch (err) {
			setError(
				err instanceof Error ? err.message : "Failed to get user data"
			);
			setLoading(false);
		}
	}, []);

	return { user, loading, error };
};

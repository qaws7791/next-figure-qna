CREATE TABLE `contents` (
	`id` integer PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`question` text NOT NULL,
	`answers` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);

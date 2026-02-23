export const queryKeys = {
  posts: {
    all: ["get", "post"] as const,
    create: ["create", "post"] as const,
    update: ["update", "post"] as const,
    delete: ["delete", "post"] as const,
  },
  users: {
    all: ["get", "user"] as const,
    create: ["create", "user"] as const,
  },
};
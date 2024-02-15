import { UserData } from "./use-cases/register-use-in-mail-list/user-data"

describe('Email list use casef', () => {
    it('should register user in mail list', async () => {
        const users: UserData[] = []
        const repository: UserRepository = new InMemoryUserRepository(users)
        const usecase: RegisterUsersOnMailList = new RegisterUsersOnMailList(repository)
        const name = 'any_name'
        const email = 'any@email.com'
        const response = await usecase.execute({name, email})
        const user = await repo.findUserByEmail(email)
        expect(user.name).toBe(name)
    })
})
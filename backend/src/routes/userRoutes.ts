import { Router } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import bcrypt from "bcrypt";

const router = Router();

router.get("/users", async (req, res) => {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const users = await userRepository.find({
            // Uncomment to return players
            /*
            relations: {
                players: true
            }
            */
        });
        
        res.json({
            success: true,
            data: users,
            count: users.length
        });
        
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            success: false,
            error: "Failed to fetch users",
            details: error instanceof Error ? error.message : String(error)
        });
    }
});

router.post('/users/new', async (request, response) => {
    const userRepository = AppDataSource.getRepository(User);

    const { username, password } = request.body;

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    if (password.length < 3) {
        return response.status(400).end()
    }

    const existingUsers = await userRepository.find({
        where: {
            username: username
        }
    })

    if(existingUsers.length != 0) {
        return response.status(400).end()
    }

    const user = new User()
    user.username = username;
    user.passwordHash = passwordHash;

    const savedUser = await userRepository.save(user);
    
    response.status(201).json(savedUser)
})

export default router;
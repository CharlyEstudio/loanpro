import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

/* Constants */
import { JWT_CONSTANTS } from "src/constants/jwt.constant";

/* Interfaces */
import { PayloadInterface } from "src/interfaces/payload.interface";
import { UserInterface } from "src/interfaces/user.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: JWT_CONSTANTS.secret
        });
    }

    async validate(payload: PayloadInterface): Promise<UserInterface> {
        const user: UserInterface = {
            userId: payload.sub,
            username: payload.username,
        };

        return user;
    }
}

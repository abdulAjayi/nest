import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const config: TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "devuser",
    password: "0818720ajayi",
    database: "blog",
    autoLoadEntities: true,
    synchronize: true
}
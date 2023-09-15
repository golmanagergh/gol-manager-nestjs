import { User } from 'src/entities/User.entity';

const Administradores = () => ({
  resource: User,
  options: {
    id: 'Administradores',
    navigation: {},
  },
});

export default Administradores;

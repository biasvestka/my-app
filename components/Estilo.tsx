const Estilo = {
  appContainer: {
    flex: 1,
    backgroundColor: '#000', // Fundo preto
  },
  viewSafeAndroid: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000', // Fundo preto
  },
  viewImage: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    padding: 20,
  },
  tamImage: {
    width: 100, // Diminuindo o tamanho da imagem para 150
    height: 100, // Diminuindo o tamanho da imagem para 150
  },
  todoSection: {
    marginBottom: 30,
  },
  todoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Texto branco
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#222', // Cinza escuro
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#fff', // Texto branco
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  addButtonText: {
    fontSize: 16,
    color: '#fff', // Texto branco
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#333', // Cinza mais escuro
    padding: 10,
    borderRadius: 8,
  },
  todoText: {
    flex: 1,
    color: '#fff', // Texto branco
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: 5,
    marginRight: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff', // Texto branco
  },
  completeButton: {
    backgroundColor: '#28a745',
    padding: 5,
    marginRight: 10,
    borderRadius: 5,
  },
  completeButtonText: {
    color: '#fff', // Texto branco
  },
};

export default Estilo;

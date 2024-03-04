const Estilo = {
  appContainer: {
    flex: 1,
    backgroundColor: 'black', // Fundo preto
  },
  viewSafeAndroid: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  viewImage: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,
  },
  tamImage: {
    width: 200,
    height: 200,
  },
  todoSection: {
    marginBottom: 30,
  },
  todoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // Texto branco
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    color: 'white', // Texto branco
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    marginLeft: 20,
  },
  addButtonText: {
    color: 'white', // Texto branco
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoText: {
    flex: 1,
    color: 'white', // Texto branco
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: 5,
    marginRight: 10,
  },
  deleteButtonText: {
    color: 'white', // Texto branco
  },
  completeButton: {
    backgroundColor: 'green',
    padding: 5,
    marginRight: 10,
  },
  completeButtonText: {
    color: 'white', // Texto branco
  },
};

export default Estilo;

#include <iostream>

using namespace std;

class Node
{
public:
    int data;
    Node *prev;
    Node *next;

    // Constructor
    Node(int d)
    {
        this->data = d;
        this->prev = NULL;
        this->next = NULL;
    }
};

// Traversing a Doubly Linked List
void print(Node *head)
{
    Node *temp = head;

    while (temp != NULL)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

// Gives length of Linked List
int getLength(Node *head)
{
    int len = 0;
    Node *temp = head;

    while (temp != NULL)
    {
        len++;
        temp = temp->next;
    }
    return len;
}

// Insert at the head
void InsertAtHead(Node *&head, int d)
{
    Node *temp = new Node(d);
    temp->next = head;
    if (head != NULL)
        head->prev = temp;
    head = temp;
}

// Insert at the tail
void InsertAtTail(Node *&tail, int d)
{
    Node *temp = new Node(d);
    tail->next = temp;
    temp->prev = tail;
    tail = temp;
}

// Insert at any position
void insertAtPosition(Node *&head, Node *&tail, int position, int d)
{
    // Insert at start
    if (position == 1)
    {
        InsertAtHead(head, d);
        return;
    }

    // Insert at given position
    Node *temp = head;
    int cnt = 1;
    while (cnt < position - 1 && temp->next != NULL)
    {
        temp = temp->next;
        cnt++;
    }

    // Insert at last position if reached end of list
    if (temp->next == NULL)
    {
        InsertAtTail(tail, d);
        return;
    }

    // Insert at the middle position
    Node *nodeToInsert = new Node(d);
    nodeToInsert->next = temp->next;
    temp->next->prev = nodeToInsert;
    temp->next = nodeToInsert;
    nodeToInsert->prev = temp;
}

int main()
{
    Node *node1 = new Node(10);
    Node *head = node1;
    Node *tail = node1;

    print(head);

    // Insert at head
    InsertAtHead(head, 11);
    print(head);

    InsertAtHead(head, 19);
    print(head);

    InsertAtHead(head, 14);
    print(head);

    // Insert at tail
    InsertAtTail(tail, 25);
    print(head);

    InsertAtTail(tail, 26);
    print(head);

    // Insert at position
    insertAtPosition(head, tail, 3, 100);
    print(head);

    insertAtPosition(head, tail, 8, 102);
    print(head);

    insertAtPosition(head, tail, 1, 104);
    print(head);

    return 0;
}

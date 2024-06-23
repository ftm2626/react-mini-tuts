"use client";
import React, { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

export default function Index() {
  const [created, setCreated] = useState(false);
  let socket: Socket;

  const socketEvents = {
    connect: "connect",
    disconnect: "disconnect",
    initial_chat: "initial_chat",
    update_message: "update_message",
    delete_message: "delete_message",
    user_disconnected: "user_disconnected",
    new_user_connected: "new_user_connected",
    send_to_all_agents: "send_to_all_agents",
    load_more_messages: "load_more_messages",
    sending_new_message: "sending_new_message",
    get_specific_user_chat: "get_specific_user_chat",
    update_viewed_flag_of_message: "update_viewed_flag_of_message",
    load_available_contacts_to_chat: "load_available_contacts_to_chat",
    back_to_main_page_get_contacts_list: "back_to_main_page_get_contacts_list",
    update_chat_contact_list_after_new_message:
      "update_chat_contact_list_after_new_message",
  };

  //creating the socket
  useEffect(() => {
    if ("token") {
      socket = io("process.env.NEXT_PUBLIC_CHAT_BACK + token");
      setCreated(true);
      //   dispatch(setChatCreation(true));
    }
  }, ["token"]);


  //setting functions when events happen
  useEffect(() => {
    function onConnect() {
      //   dispatch(setChatConnection(true));
    }

    function onDisconnect() {
      //   dispatch(setChatConnection(false));
    }

    function initial_chat(data: any) {
      //   dispatch(setChatInitialData(data));
    }

    function get_specific_user_chat(data: any) {
      //   dispatch(setOneChatData(data));
    }

    function load_available_contacts_to_chat(data: any) {
      //   dispatch(setContactListData(data));
    }
    function sending_new_message(data: any) {
      //   dispatch(addChatMsg({ ...data, readAt: "" }));
    }

    function update_message(data: any) {
      //   dispatch(updateChatMsg(data));
    }

    function delete_message(data: any) {
      //   dispatch(deleteChatMsg(data.deletedMessageId));
    }

    if (created) {
      socket?.on(socketEvents.connect, onConnect);
      socket?.on(socketEvents.disconnect, onDisconnect);
      socket?.on(socketEvents.initial_chat, initial_chat);
      socket?.on(socketEvents.update_message, update_message);
      socket?.on(socketEvents.delete_message, delete_message);
      socket?.on(socketEvents.sending_new_message, sending_new_message);
      socket?.on(socketEvents.get_specific_user_chat, get_specific_user_chat);
      socket?.on(
        socketEvents.load_available_contacts_to_chat,
        load_available_contacts_to_chat
      );
    }

    return () => {
      if (created) {
        socket?.off(socketEvents.connect, onConnect);
        socket?.off(socketEvents.disconnect, onDisconnect);
        socket?.off(socketEvents.initial_chat, initial_chat);
        socket?.off(socketEvents.update_message, update_message);
        socket?.off(socketEvents.delete_message, delete_message);
        socket?.off(socketEvents.sending_new_message, sending_new_message);
        socket?.off(
          socketEvents.get_specific_user_chat,
          get_specific_user_chat
        );
        socket?.off(
          socketEvents.load_available_contacts_to_chat,
          load_available_contacts_to_chat
        );
      }
    };
  }, [created]);

  // calling the event with data
  async function sendMessage() {
    socket?.emit(socketEvents.sending_new_message, {
      data: {
        type: "text",
        data: "input",
      },
      destination_user: "params?.id",
      sender: "initialData?.user",
    });
  }

  return <div>page</div>;
}

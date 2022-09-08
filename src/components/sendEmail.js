import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, TextInput, Image } from 'react-native';

// const BANK_ASH = '#4F4F4F';
import qs from 'qs';

import * as Linking from 'expo-linking';

export default async function SendEmail(to, subject, body, options = {}) {
    const { cc, bcc } = options;
    let url = `mailto:${to}`;
    // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: bcc
    });
    if (query.length) {
        url += `?${query}`;
        console.log(url);
    }
    // check if we can use this link
    const canOpen = await Linking.openURL(url);
    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }
    return Linking.openURL(url);
} 



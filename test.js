{info && (
    <View>
        <ImageBackground 
            style={styles.bg} 
            source={{ uri: info.thumbnail }}
            resizeMode="cover"
        >
                <Animated.ScrollView
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={1}
                >
                    <View>
                        <Animated.View style={{ height: 600, marginBottom: 0} }>
                            <LinearGradient
                                style={StyleSheet.absoluteFill}
                                start={[0, 0.3]}
                                end={[0, 1]}
                                colors={["transparent", "rgba(0, 0, 0, 0.5)", "black"]}
                            >
                                <View style={styles.bgContent}>
                                    <Text style={styles.bgTitle}>{info.title}</Text>
                                    <View style={styles.status}>
                                        <Text style={{ color: '#fff', marginRight: 10 }}>Series</Text> 
                                        <Text style={{ color: '#fff', marginRight: 10 }}>{info.status}</Text>
                                        <View 
                                            style={{ 
                                                backgroundColor: statusColor[info.status.toLowerCase()],
                                                width: 10,
                                                height: 10,
                                                borderRadius: 10
                                            }}>
                                        </View>
                                    </View>
                                    <Text numberOfLines={2} style={styles.bgDesc}>{info.summary}</Text>
                                    
                                    <Pressable onPress={() => setShowModal(true)} style={styles.detailsBtn}>
                                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>
                                            MORE DETAILS
                                        </Text>
                                    </Pressable>
                                </View>
                            </LinearGradient>
                        </Animated.View>
                    </View>

                    <View style={{ backgroundColor: 'black', paddingTop: 7 }}>
                        {/* <ActivityIndicator visible={showSpinner} style={styles.loader}/> */}
                        <Modal 
                            animationType="slide"
                            onRequestClose={() => setShowModal(false)}
                            style={styles.modal} 
                            visible={showModal} 
                            >
                            <StatusBarComp>
                                <Pressable style={styles.modalBtn} onPress={() => setShowModal(false)} title="Close">
                                    <EvilIcons style={styles.close} name="close" size={26} color="white" />
                                </Pressable>
                                <Text style={styles.genre} >Genres: {info.genre.join(", ").toString()}</Text>
                                <ScrollView style={styles.modalTextContainer}>
                                    <Text style={styles.modalText}>{info.summary}</Text>
                                </ScrollView>
                            </StatusBarComp>
                        </Modal>

                        <EpisodesTrayVertical towhere="Player"/>
                    </View>
                </Animated.ScrollView>
        </ImageBackground>
    </View>
    )}